const formatDate = (dateString: string): string => {
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