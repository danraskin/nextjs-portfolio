import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// support markdown html naively
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const setDirectory = (directory) => {
  if (directory === 'projects') {
    return path.join(process.cwd(), 'content/projects');
  } else if (directory === 'blog') {
    return path.join(process.cwd(), 'content/blog');
  } else if (directory === 'about') {
    return path.join(process.cwd(), 'content/about');
  }
}

export async function getSortedProjectsData(directory) {

  const contentDirectory = setDirectory(directory);
  
  const fileNames = fs.readdirSync(contentDirectory);

  const allProjectsData = await Promise.all(fileNames.map( async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, {excerpt_separator: '<!-- excerpt -->'});

    // console.log('in getSortedProjectsData', matterResult)
    const excerpt = await processMatterContent(matterResult.excerpt);
    // console.log('matterExcerpt', excerpt)

    // Combine the data with the id
    return {
      id,
      excerpt,
      ...matterResult.data,
    };
  }));

  // console.log('content data: ', allProjectsData)
  // Sort projects by index
  return allProjectsData.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectsIds(directory) {
  const contentDirectory = setDirectory(directory);
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// processes markdown file content to html
const processMatterContent = async (matterContent) => {
  const processedContent = await unified()
  .use(remarkParse)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeStringify, {allowDangerousHtml: true})
  .process(matterContent);
  return processedContent.toString();
}


export async function getContentData(directory, id) {
  const contentDirectory = setDirectory(directory)
  console.log(directory, contentDirectory)

  let fullPath;

  if (directory === 'about') {
    fullPath = path.join(contentDirectory, 'about.md');
    console.log('fullpath: ',fullPath)
  } 
  else {
    fullPath = path.join(contentDirectory, `${id}.md`);
    console.log('fullpath: ',fullPath)
  } 

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {excerpt_separator: '<!-- excerpt -->'});
  // console.log('matter result', matterResult);
  // Use remark to convert markdown into HTML string
  const contentHtml = await processMatterContent(matterResult.content);
  const excerptHtml = await processMatterContent(matterResult.excerpt);

  // Combine the data with the id
  return {
    id,
    contentHtml,
    excerptHtml,
    ...matterResult.data,
  };
}