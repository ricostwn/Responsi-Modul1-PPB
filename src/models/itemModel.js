import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  // Read All (with optional status filter)
  async getAll(status) {
    let query = supabase.from("items").select("*");

    if (status) {
      query = query.eq("status", status); // Implementasi Filter Status
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  // Read By ID
  async getById(id) {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  // Create
  async create(payload) {
    const { data, error } = await supabase
      .from("items")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Update
  async update(id, payload) {
    const { data, error } = await supabase
      .from("items")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Delete
  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { message: "Data sepatu berhasil dihapus." };
  },
};