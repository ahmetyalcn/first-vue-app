import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
  try {
    // Get data from the request body, assuming it contains the item to be deleted
    const body = await readBody(event);

    // Read the content of the "db.json" file
    const data = await fs.readFile('server/api/db.json', 'utf8');
    const obj = JSON.parse(data);

    // Identify the item you want to delete (e.g., by some unique identifier like ID)
    const id = event.context.params.id; // Use the 'id' variable for identification

    // Filter out the item to be deleted
    const updatedData = obj.filter(item => item.id !== Number(id));
    // Convert the updated data back to JSON


    // Write the modified data back to the "db.json" file
    try {
      fs.writeFile("server/api/db.json", JSON.stringify(updatedData, null, 4), function (err) {
        if (err) throw err;
        console.log('Saved new server!');
      });
   
    } catch (writeError) {
      console.error('Error writing data to file:', writeError);
      throw createError({
        message: 'Failed to save changes to the file',
      });
    }
    console.log(`Note with ID ${id} deleted`);
    return { message: `Note with ID ${id} deleted` };

  } catch (err) {
    console.error('Error:', err);
    throw createError({
      message: 'Failed to delete note',
    });
  }
});
