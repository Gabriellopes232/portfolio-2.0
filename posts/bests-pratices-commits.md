---
title: 'Bests Pratices Commits and Pull Requests'
date: 'Aug 12, 2023'
---

## Introduction

In the world of software development, efficient collaboration between team members is critical to ensuring code quality and project success. In this article, we'll explore three essential practices for effective collaboration: commit standardization, code review, and the Pull Requests (PR) flow.

## Standardization of Commits: Clarity and Consistency

Commit standardization is a practice that aims to make commit messages clearer, concise, and easier to understand. By adopting a standard format such as Conventional Commits, team members can quickly and accurately see the changes made. The basic format consists of a type, an optional scope, and a description. For example:

```js
feat(login): Adds password validation to the login form
```

This standardization allows for easier navigation through the history of changes and a better understanding of the changes made.

In addition, it is recommended to use tools such as Git Hooks to automate the verification of the standardization of commits, ensuring that all messages are in accordance with the guidelines established by the team.

## Code Review: Improving Code as a Team

Code review is a practice in which team members review code written by their colleagues before it is merged into the main branch of the repository. This practice brings several benefits, such as the identification of errors and logic problems, improvements in code quality and the exchange of knowledge among team members.

During the code review, reviewers examine the code, analyze its readability, adherence to best practices, and provide constructive feedback. It is important to establish clear guidelines for code review, such as review deadlines, acceptance criteria, and project-specific best practices. Tools like GitHub and GitLab often offer features to facilitate the code review process, allowing comments directly on the code and discussions about proposed changes.

## Pull Request Flow: Facilitating Collaboration

The Pull Requests flow is a team collaboration process that allows changes to be reviewed and merged in a controlled manner. This flow usually involves the following steps:

1. **Clone the repository**: Start by cloning the project's repository on your local machine.
2. **Create a branch**: Create a new branch from the main branch of the repository.
3. **Make your changes**: Make the desired changes to the project files.
4. **Add and commit changes**: Add the modified files to the commit index and commit the changes with a descriptive message.
5. **Commit your changes**: Push your changes to the remote repository in your branch.
6. **Create the Pull Request**: Access the repository on the Git hosting service and create a new Pull Request, filling in the necessary information.
7. **Wait for Review**: Wait for review and feedback from other team members.
8. **Complete Changes**: If changes are requested during the review, make the necessary changes in your local branch and push back to the remote repository.
9. **Pull Request Merge**: After the Pull Request is reviewed and approved, a member with sufficient permissions can merge the changes into the parent branch.
10. **Update your local branch**: Update your local branch with the merged changes.

This approach promotes transparent collaboration, facilitates discussion, and maintains a clear history of changes made. Furthermore, it can help to avoid code conflicts and ensure project integrity.

## Conclusion: Improving Team Collaboration

Efficient collaboration between team members is essential to the success of any software development project. By adopting the standardization of commits, performing the code review and following the Pull Requests flow, it is possible to improve the quality of the code, promote the exchange of knowledge and ensure a clear history of the changes made.

By implementing these practices, development teams can achieve more effective collaboration, resulting in more robust, consistent, and high-quality code. Remember to adapt these practices according to the needs and particularities of each project, always seeking the continuous improvement of the team and the code produced.

## Useful links

Git hooks: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

Conventinal commits: https://www.conventionalcommits.org/en/v1.0.0/

Pull Requests: https://coodesh.com/blog/dicionario/o-que-e-pull-request-pr/