import React, { useState, useRef, useEffect } from 'react';
import { searchIcon } from '../assets';

const SearchBar = () => {
   const [isExpanded, setIsExpanded] = useState(false);
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
   const containerRef = useRef<any>(null);

   const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
   };

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleBlur = (event: any) => {
      if (!containerRef.current.contains(event.relatedTarget)) {
         setIsExpanded(false);
      }
   };

   return (
      <div
         ref={containerRef}
         style={{
            display: 'flex',
            overflow: 'clip',
            width: isLargeScreen || isExpanded ? '400px' : '40px', // Expanded permanently on large screens
            height: '40px',
            borderRadius: '8px',
            border: '1px solid #213F7D',
            transition: 'width 0.3s ease-in-out',
         }}
         onClick={() => !isLargeScreen && setIsExpanded(true)} // Expand only on smaller screens
         tabIndex={0}
         onBlur={handleBlur}
      >
         {(isLargeScreen || isExpanded) && (
            <input
               style={{
                  width: '85%',
                  padding: '0.5rem',
                  border: 'none',
                  outline: 'none',
               }}
               type="text"
               placeholder="search for anything"
               autoFocus={!isLargeScreen && isExpanded}
            />
         )}
         <div
            style={{
               width: isLargeScreen || isExpanded ? '15%' : '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               background: '#39CDCC',
            }}
         >
            <img src={searchIcon} alt="Search" />
         </div>
      </div>
   );
};

export default SearchBar;
