export function ConvertFileToBase64(file:File):Promise<string>{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onloadend = async () => {
          resolve((reader.result as string).split(',')[1]);
        };
    
        reader.onerror = (error) => {
          reject(error);
        };
    
        reader.readAsDataURL(file);
      });
}