import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const aboutDirectory = path.join(process.cwd(), 'content/about');

export function getSortedProjectsData() {

  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort projects by index
  return allProjectsData.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectsIds() {
    const fileNames = fs.readdirSync(projectsDirectory);
  
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

export async function getContentData(id, directory) {

  let fullPath;

  if (directory === 'projects') {
    fullPath = path.join(projectsDirectory, `${id}.md`);
  } else if (directory === 'about') {
    fullPath = path.join(aboutDirectory, 'about.md');
  } else if (directory === 'blog') {
    console.log('no blog directory yet')
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}