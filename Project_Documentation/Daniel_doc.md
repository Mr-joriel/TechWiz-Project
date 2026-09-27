# Daniel - Contribution Report

## Overview

I built the AI Chatbot learning assistant, Infographics gallery, About page, Feedback form, and Contact page. The interaction content is local to the browser; these features do not use a backend service.

## Chatbot

At the assistant route, the learner enters a question or chooses one of the suggested prompts about needs, saving, or avoiding overspending. The page matches question keywords against pre-written answers in the local chatbot JSON file and displays a safe fallback when it cannot match a topic. It clearly says that the feature provides general education and is not professional financial advice. Questions are handled in the browser and are not sent to an AI service.

## Infographics and Learning Gallery

At the gallery route, I present local visual guides with titles, topics, captions, and alternative text. The learner can search titles and captions, filter by topic, sort the results, and clear filters when there are no matches. The included SVG illustrations are original local project artwork created with AI-assisted development support; they are not downloaded stock imagery.

## About

At the About route, I describe BudgetBasics as a student-friendly budgeting education project, explain its purpose and values, and credit the project team members and their areas of work.

## Feedback and Contact

The Feedback form requests the learner's name, email, rating, topic, and comments. The Contact form requests a name, email, subject, and message, and displays the team-provided Gmail address, Aptech Ajao Estate's published phone number, and links to Aptech's official corporate Instagram and LinkedIn channels. Both forms validate in the browser and show a confirmation state without storing or transmitting form content.

## Styling

I used CSS Modules and the common theme tokens to keep the gallery, forms, and About page consistent with the rest of the app. The forms and gallery controls are designed to remain usable at narrow widths and with keyboard navigation.
