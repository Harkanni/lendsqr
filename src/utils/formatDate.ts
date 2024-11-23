const formatDate = (dateString: string): string => {

   if (!dateString || isNaN(new Date(dateString).getTime())) {
      return 'Invalid Date'; // Handle invalid dates gracefully
    }
   const date = new Date(dateString);
   return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
   }).format(date);
};
 

export default formatDate