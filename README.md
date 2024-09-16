# KieranAI
This is an AI chatbot that utilizes OpenAI's Api to generate a text response to a users prompt. The AI is trained to speak as if it were me and it has been trained using my resume to know certain details about me. The application runs using Angular 16.

**Although the AI speaks from my perspective, the AI's opinions are not my own.*

## Requirements
+ Must have Node.js installed
+ **Will have to pay at least $5 for OpenAI api key (tutorial for how to do that below)**

## API keys
To actually get the chatbot working you will need to acquire an Organization key, a Project key, and an API key.  
1. First you need to create an environment.ts file in the src/app/environment folder.

2. In your environment.ts file you should have the following code.
```
export const OPEN_AI_ORG_KEY=<your organization key>
export const OPEN_AI_PROJ_KEY=<your project key>
export const OPEN_AI_API_KEY=<your api key>
```

*Note: We will replace the \<your ___ key> tags with their respective keys.*

### Organization Key
1. To acquire an organization key go to [OpenAI](https://platform.openai.com/settings/organization/general)  
2. Then Log In. After logging in you should see a page that looks like the following image:
![image](https://github.com/user-attachments/assets/42d191a1-d691-44b7-aa46-27f5744fe336)
3. The part circled in red will be what you copy and replace the \<your organization key> with in the environment.ts file. **Make sure you put the key in quotation marks ""**  
Should look something like this:
```
export const OPEN_AI_ORG_KEY="org-xxxxxxxxxxxxxxxxxxxxx";
```

### Project Key
To acquire a project key you first have to create a project.  
1. To create a project stay on the same page as the organization key ([OpenAI](https://platform.openai.com/settings/organization/general)) and click on the button circled red below:
![image](https://github.com/user-attachments/assets/5a7e0abe-94d7-4a56-a432-0855e9c6aa05)
  
2. After clicking that you will see the following popup, click the create project button circled in red:  
![image](https://github.com/user-attachments/assets/b628a3ab-1829-433f-b7e7-b25e8d47767d)  
  
3. This will bring up the following popup which you should fill out as you please then hit the create button:  
![image](https://github.com/user-attachments/assets/3a7d6da9-92d5-4ff8-bb26-4fa1872b0d53)  
  
4. After creating your project click the general tab on the left (circled in red) and you will find your project ID there (circled in blue):  
![image](https://github.com/user-attachments/assets/4d401430-9003-4ccf-aeef-8c47e1795562)  
5. Copy that project ID and replace the \<your proj key> with it in the environment.ts file. **Make sure you put the key in quotation marks ""**  
Should look something like this:
```
export const OPEN_AI_PROJ_KEY="proj_xxxxxxxxxxxxxxxxxxx";
```

### API Key
To get a working API Key you first have to put some funds into your OpenAI account.

#### Adding Funds
1. To add funds you must click the Billing tab on the left (circled in red) and click on the Add payment details button (circled in blue)  
*Note: This button may say "Add to credit balance" if you already have payment details added.*  
![image](https://github.com/user-attachments/assets/f50003c8-10b8-4d7d-9eba-1a6b4f9ba2b8)  
  
2. You will see the following popup. Select which best suits you.  
![image](https://github.com/user-attachments/assets/92cecc29-ce08-47b7-a83f-8a2fd9f02102)  
  
3. After that you will be prompted to add your payment details. After filling out the form hit the green continue button.  
![image](https://github.com/user-attachments/assets/6d4cf737-a2dd-413a-b91a-3608d30bf6be)  

4. After that you can add a balance to your account. I recommend only putting $5 as it goes a long way. Once you have the amount you want selected hit the green Continue button.  
![image](https://github.com/user-attachments/assets/40d4b699-5988-4f1c-888e-b8645f1a8028)  
You should now see $5 in your account.  

#### Acquiring the API key
Now that you have funds in your account you can get a working api key
1. First click on the Your Profile tab on the left (circled in red) then click the User API keys tab (circled in blue)  
![image](https://github.com/user-attachments/assets/a474a3e1-89a8-4686-91bc-bb2d181e73d5)
  
2. Next click the Create new secret key button (circled in red)  
![image](https://github.com/user-attachments/assets/c64fa1c0-c921-426c-aead-650a62e8b685)

3. After that you will see the following popup. Enter any name you want for the key and then hit the green Create secret key button:  
![image](https://github.com/user-attachments/assets/49ed9935-9169-4de1-98af-46d9c86e551e)

4. After that you will see the following popup. **Make sure you take note of the message in this popup as you won't be able to access this key again if you lose it** (If you do lose it just delete the key and create a new one). Copy the key from this popup and store it somewhere secure.  
![image](https://github.com/user-attachments/assets/5a7a193f-f51b-4089-9010-db277df623e5)

5. Take that key you just copied and replace the \<your api key> tag in the environment.ts file with that key.  **Make sure you put the key in quotation marks ""**  
Should look something like this:
```
export const OPEN_AI_API_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
```

**Now you have all your keys so make sure you save your environment.ts file and now you're ready to run the application.**

## Running the Application
When you first clone the repository to your device you should navigate to the /AI-ChatBot-App/ai-chatbot-app directory and run the following command:  
```sh
npm install
```
  
After that whenever you want to serve or run the application you can run the following command in the terminal:  
```sh
ng serve --open
```
