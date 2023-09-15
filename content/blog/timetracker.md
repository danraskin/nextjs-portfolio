---
title: 'Building Zsh-Timetracker'
date: '2023-09-14'
index: '1'
image: '<Image src="/images/timetracker2.png" height="150"/>'
description: 'Learning Z shell scripting with ChatGPT'
---
# Bulding Zsh-Timetracker:
## Learning Z shell scripting with ChatGPT

- <a class='link' href='https://github.com/danraskin/zsh-timetracker/tree/main'>Project Repo</a>

While tracking hours for a contracting gig using Google Sheets, I got curious: could I write a script to do this for me? A classic early-career developer's paradigm.<br/>
<br/>
I took this as an opportunity to try two new things:
- Learn shell scripting
- Utilize ChatGPT as a learning/productivity tool

The first iteration of the program was produced from a detailed ChatGPT prompt, while subsequent iterations were developed through trial and error, further prompts, and reading documentation resources.<br/>
 <br/>
ChatGPT produces accurate and readable explanations of core function and syntax issues, and frequently produced usable solutions to certain problems. I was exposed to a LOT of core concepts in shell scripting, such as <a class='link' href='https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion'>**expansion**</a>, <a class='link' href='https://zsh.sourceforge.io/Doc/Release/Conditional-Expressions.html#Conditional-Expressions'>**conditional expressions**</a>, <a class='link' href='https://zsh.sourceforge.io/Doc/Release/Expansion.html#Command-Substitution'>**command substitution**</a> and <a class='link' href='https://zsh.sourceforge.io/Doc/Release/Parameters.html#Array-Parameters'>**parameters**</a>
 
However, the initial design solutions proposed by ChatGPT where rarely optimized for the project scope, and frequently took me in multiple directions before I settled on a solution.

### CHALLENGES AND SOLUTIONS

- Relative vs absolute filepaths. Timetracker data is stored in .csv file. I wanted users to be able to run timetracker from any file location on their system. After several attempts, I found a solution utilizing the readlink and dirname $0 commands. <a class='link' href='https://bytexd.com/what-is-dirname-0-and-usage-examples/'>read about it here</a>.

<pre class='code'>
# readlink $0 and dirname together locate the
# absolute path to the .csv file even when
# users are accessing timetracker via a symlink.

script_path="$(readlink -f "$0")"
script_dir="$(dirname "$script_path")"
CSV_FILE="${script_dir}/timetracker.csv"
</pre>
- User inputs. ChatGPT's first suggested script architecture was a convluted set of if... else statements. I refactored the initial output so that the main script of Timetracker is a while... loop that calls functions based on user commands. 
<pre class='code'>
# abbreviated example:
while true; do
  read command
  case $command in
    "start")
      cmd_start ;;
    "stop")
      cmd_stop ;;
    "-p "* || "-t "* || "-pt "* )
      cmd_set_proj "$command" ;;
  esac
done
</pre>
- Parameter expansion and user inputs. At, I did not understand the difference between command-line arguments and user inputs. The initial outputs assumed the program would be running from the command-line, and proposed solutions like the [getopts](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html#getopts) utility. This was not suited for my needs. Eventually, I settled on paramete expansion to break apart user input tags -p, -t from their associated arguments.
<pre class='code'>
# declares a top level associative array PROJECT

declare -A PROJECT=(prj "" task "" start_time "" stop_time "")

# local ARGS=(${(s: :)1}) creates a local variable array args
# by separating user input string on whitespace.
# if user input is '-pt NEWPROJECT BRAINSTORM',
# args=('-pt' 'NEWPROJECT' 'BRAINSTORM')
# cmd_set_proj sets project and task names to PROJECT array.

cmd_set_proj () {
  local ARGS=(${(s: :)1})
  case $ARGS[1] in
  -pt)
    PROJECT[prj]=$args[2]
    PROJECT[task]=$args[3] ;;
# ...
  esac
}
</pre>

### TAKEAWAYS

ChatGPT was an effective tool, but my use of it was often inefficient. Given my inexperience with Unix, I was destined to confront a learning curve. However, I founnd myself learning core shell concepts at the same time as problem-solving issues with ChatGPT-generated program designs solutions.<br/>
<br/>
If I pursue this method in the future, I will spend more time on project design before submitting prompts to ChatGPT.