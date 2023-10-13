import fs from "fs/promises"
export default defineEventHandler(async (event) => {
    try {
      const data = await fs.readFile('server/api/db.json', 'utf8');
      const obj = JSON.parse(data);
      
      // Return the data in response to the GET request
      return obj;
    } catch (error) {
      console.error('Error reading "db.json":', error);
      throw createError({
        message: 'Failed to retrieve data',
      });
    }
  });
  