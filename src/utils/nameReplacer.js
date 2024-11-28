// Function to fetch templates and replace name
async function generateText(name) {
    try {
        const response = await fetch('/data/templates.json');
        const data = await response.json();
        const templates = data.templates;
        
        // Get random template
        const randomIndex = Math.floor(Math.random() * templates.length);
        const template = templates[randomIndex];
        
        // Replace {name} with the provided name
        const generatedText = template.replace('{name}', name);

        // Save the generated content
        await saveGeneratedContent(name, generatedText);
        
        return generatedText;
    } catch (error) {
        console.error('Error generating text:', error);
        return 'Error generating text';
    }
}

// Function to save generated content
async function saveGeneratedContent(name, text) {
    try {
        // Fetch existing content
        const response = await fetch('/data/generated-content.json');
        const data = await response.json();
        
        // Add new content
        data.generated_contents.push({
            name: name,
            generated_text: text,
            timestamp: new Date().toISOString()
        });
        
        // Save updated content
        await fetch('/data/generated-content.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data, null, 2)
        });
    } catch (error) {
        console.error('Error saving generated content:', error);
    }
}

// Function to get all generated content
async function getGeneratedContent() {
    try {
        const response = await fetch('/data/generated-content.json');
        const data = await response.json();
        return data.generated_contents;
    } catch (error) {
        console.error('Error fetching generated content:', error);
        return [];
    }
}

export { generateText, getGeneratedContent };
