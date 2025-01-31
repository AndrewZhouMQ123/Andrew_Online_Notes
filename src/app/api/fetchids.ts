import supabase from "./db";

const fetchIdsByName = async (name: string) => {
  const { data, error } = await supabase
    .from('ids_table')
    .select('ids')
    .eq('name', name);

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('Fetched IDs:', data);
      return data;
    }
}

export default fetchIdsByName;