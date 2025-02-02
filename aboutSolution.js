```javascript
// pages/about.js
export default function About() {
  const myVar = process.env.MY_CUSTOM_VARIABLE || 'Default Value';
  console.log(myVar); // Logs 'Default Value' if MY_CUSTOM_VARIABLE is not defined
}
```
```bash
# Add environment variables to .env.local
MY_CUSTOM_VARIABLE=MyCustomValue
```