// src/components/GeneratedPasswordsList.js
import React, { useRef, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GeneratedPasswordsList = ({ passwords }) => {
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [passwords]);

  return (
    <Box my={2} className="bg-white p-4 rounded-lg shadow-md">
      <Typography variant="h6" className="text-xl font-semibold text-gray-700 mb-2">
        Last 5 Generated Passwords:
      </Typography>
      <List ref={listRef} className="space-y-2">
        {passwords.slice(0, 5).map((password, index) => (
          <ListItem key={index} className="bg-gray-100 rounded-lg">
            <ListItemText primary={password} className="text-gray-700" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GeneratedPasswordsList;
