import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
  try {
    // Get data from the request body
    const body = await readBody(event);

    // Read the content of the "db.json" file
    const data = await fs.readFile('server/api/db.json', 'utf8');
    const obj = JSON.parse(data);
    obj.push(body);
    const strNotes = JSON.stringify(obj);

    // Write the modified data back to the "db.json" file
    await fs.writeFile('server/api/db.json', strNotes, 'utf8');
    
    console.log('Note added');
    return { message: 'Note added' };
    
  } catch (err) {
    console.error('Error:', err);
    throw createError({
      message: 'Failed to add note',
    });
  }
});
