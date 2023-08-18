function generatePrompt(gender, clothingType, selectedCategory, userPrompt) {
    let prompt = `Generate a detailed image of a ${clothingType === 'full' ? 'full body' : clothingType === 'upper' ? 'mannequin with upper body' : 'mannequin with lower body'} wearing `;

    if (gender === 'male') {
        prompt += `men's ${selectedCategory}. `;
    } else if (gender === 'female') {
        prompt += `women's ${selectedCategory}. `;
    }

    switch (selectedCategory) {
        case 'Suits':
            prompt += `Create an elegant ${clothingType === 'full' ? 'suit' : 'jacket'} with intricate patterns and a modern touch. Pay attention to the color combination and fit. Incorporate stylish accessories such as cufflinks or buttons. ${userPrompt || ''}`;
            break;
        case 'Sherwanis':
            prompt += `Design a traditional ${clothingType === 'full' ? 'sherwani' : 'sherwani-style jacket'} with rich embroidery and regal accents. Highlight the cultural and ethnic elements while ensuring a comfortable fit. ${userPrompt || ''}`;
            break;
        case 'T-Shirts':
            prompt += `Craft trendy ${clothingType === 'full' ? 'T-shirts' : clothingType === 'upper' ? 'upper body tops' : 'bottoms'} with unique graphics or patterns. Focus on creating a comfortable yet fashionable look that can be worn casually or for outings. ${userPrompt || ''}`;
            break;
        case 'Casual Shirts':
            prompt += `Design stylish casual shirts with various patterns and colors. Ensure that the shirts offer a relaxed and comfortable fit while maintaining a fashionable appearance. ${userPrompt || ''}`;
            break;
        case 'Formal Shirts':
            prompt += `Create sophisticated formal shirts that are suitable for professional settings. Pay attention to details such as collars, cuffs, and fabric quality, ensuring a refined and polished look. ${userPrompt || ''}`;
            break;
        case 'Sweatshirts':
            prompt += `Craft cozy sweatshirts that provide both warmth and style. Focus on creating unique designs, comfortable materials, and attention-grabbing color combinations. ${userPrompt || ''}`;
            break;
        case 'Jackets':
            prompt += `Design trendy jackets that can be worn for various occasions. Pay attention to style and functionality, incorporating features like pockets, zippers, and unique textures. ${userPrompt || ''}`;
            break;
        case 'Sweaters':
            prompt += `Create stylish sweaters that offer warmth and comfort. Incorporate unique knitting patterns or textures to add visual interest. Choose color palettes that resonate with the season and the overall design. ${userPrompt || ''}`;
            break;
        // Add more cases for other categories here...
        default:
            prompt += `Design a ${clothingType === 'full' ? 'complete outfit' : clothingType === 'upper' ? 'top' : 'bottom'} that showcases the essence of ${selectedCategory}. Incorporate unique design elements, colors, and materials to make it stand out. ${userPrompt || ''}`;
            break;
    }


    return prompt;
}

const concatUserInput = (userInput) => {
    const { gender, fullBodyWear, upperBodyWear, lowerBodyWear, customPrompt } = userInput;

    let combinedPrompt = "";

    if (fullBodyWear.isFullBodyWear) {
        const prompt = generatePrompt(gender, 'full', fullBodyWear.category, fullBodyWear.prompt);
        combinedPrompt += prompt + "\n";
    }

    if (upperBodyWear.isUpperBodyWear) {
        const prompt = generatePrompt(gender, 'upper', upperBodyWear.category, upperBodyWear.prompt);
        combinedPrompt += prompt + "\n";
    }

    if (lowerBodyWear.isLowerBodyWear) {
        const prompt = generatePrompt(gender, 'lower', lowerBodyWear.category, lowerBodyWear.prompt);
        combinedPrompt += prompt + "\n";
    }

    if (customPrompt) {
        combinedPrompt += customPrompt + "\n";
    }

    return combinedPrompt;
};


export { concatUserInput }