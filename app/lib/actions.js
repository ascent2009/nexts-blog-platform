'use server';

export async function createPost() {
    let counterID = 0
    
    const rawFormData = {
        id: formData.get('id'),
        title: formData.get('title'),
        avatar: formData.get('avatar'),
        author: formData.get('author'),
        date: formData.get('date'),
        image: formData.get('image'),
        content: formData.get('content'),
        popular: formData.get('popular'),
        engineering: formData.get('engineering'),
        marketing: formData.get('marketing'),
        company: formData.get('company'),
      };
      // Test it out:
    // console.log(rawFormData);
    console.log("sdcssfvsdvsv");
}