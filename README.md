# React Combobox Example
This is a simple Vite app where I have built a combobox to use as a sample for a job interview.

## Styling
After recently learning that vanilla css now supports nesting, I wanted to use this as an test app with only using css.

## Running the app
I have generally preferred pnpm - you can use the package manager you prefer, but with pnpm you run the dev server after downloading the repo with the following commands:
```
pnpm i
pnpm dev
```

## isSearchable 
Originally, I figured that I would display both of the variants on the home page of this sample app, but after looking at them both on the page at the same time, I didn't like it. The default url will default isSearchable to false - to enable the seachable combobox, add `?isSearchable=true`


## Running the tests
I have recently wanted to move my tests from Cypress to Playwright, but haven't taken the time to really figure out palywrite, so I wanted to use this simple app as a test app.

I have generally used Cypress for end-to-end tests on a deployed application in the past but wanted to play around with setting it up in a single command with `start-server-and-test`. I think it is workable. I am not a super fan of having to specify the url in multiple places, but I think it serves my purposes currently.

Using pnpm run the tests by running the following:
```
pnpm test
```

Additional note - this is a pretty simplistic task - a single combobox. My general stategy about tests is that you want to write them to be as robust as possible, so that you could adjust the look and feel of the component, but as long as the basic functionality of the component stays the same the test should just keep working. This generally means that I don't like to write tests that check for specific styles like a hover color or a selected color, and I find that kind of test always brittle. Additionally, I appreciated that playwright did case insensitive matching by default which makes the test more robust.

### Notes
This app is based on the template produces using the following command `pnpm create vite react-combo-box --template react-ts`
