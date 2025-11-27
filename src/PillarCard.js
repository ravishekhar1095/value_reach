import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function PillarCard({ icon, title, children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Paper
      ref={ref}
      elevation={3}
      sx={{ p: 3, borderRadius: 2, opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(18px)', transition: 'all 420ms cubic-bezier(.2,.9,.2,1)', transitionDelay: `${delay}ms` }}
    >
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>{children}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default PillarCard;