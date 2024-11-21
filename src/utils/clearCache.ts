import localforage from "localforage";

const clearCache = async (storage: LocalForageDriverDbMethods) => {
   try {
      await storage.clear();
      console.log('Cache cleared successfully');
   } catch (err) {
      console.error('Failed to clear cache:', err);
   }
};

export default clearCache;