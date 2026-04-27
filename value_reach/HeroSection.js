import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Infobip's primary blue color for the call-to-action button
const primaryBlue = '#0028F5';

const featureHighlights = [
  {
    label: 'Journeys',
    title: 'Design adaptive, multi-channel flows',
    description:
      'Drag-and-drop orchestration that handles SMS, WhatsApp, Voice, and Email with intelligent fallbacks.',
    stat: '<50ms',
    statLabel: 'Avg latency',
  },
  {
    label: 'Intelligence',
    title: 'Predictive engagement scores out-of-the-box',
    description:
      'Built-in intelligence recommends the next best channel and cadence based on live delivery metrics.',
    stat: '32%',
    statLabel: 'Lift in CTR',
  },
  {
    label: 'Security',
    title: 'Enterprise-grade guardrails baked in',
    description:
      'SOC 2 Type II, ISO 27001, GDPR ready, and automated compliance monitors keep every interaction safe.',
    stat: '190+',
    statLabel: 'Countries covered',
  },
];

const workflowSteps = [
  { title: 'Connect', description: 'Plug in APIs or low-code blocks in minutes.', kpi: '700+', caption: 'Direct carriers' },
  { title: 'Orchestrate', description: 'Blueprint every journey with visual logic.', kpi: '∞', caption: 'Channel combos' },
  { title: 'Observe', description: 'Real-time QoS, spend, and sentiment dashboards.', kpi: '99.99%', caption: 'Uptime SLA' },
];

const heroStats = [
  { value: '99.99%', label: 'uptime SLA' },
  { value: '700+', label: 'direct carrier links' },
  { value: 'ISO 27001 • SOC 2', label: 'certifications' },
];

// Custom styled button to match Infobip's primary CTA
const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: primaryBlue,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 4),
  fontSize: '1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#001da8', // A slightly darker blue for hover
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 28,
  background: 'linear-gradient(145deg, rgba(0, 40, 245, 0.16), rgba(7, 8, 18, 0.85))',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  minHeight: 240,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(5, 11, 35, 0.45)',
}));

const StatGlow = styled(Box)(() => ({
  position: 'absolute',
  inset: '40% auto auto 50%',
  width: 220,
  height: 220,
  transform: 'translate(-50%, -50%)',
  background: 'radial-gradient(circle, rgba(0, 40, 245, 0.25), transparent 70%)',
  pointerEvents: 'none',
}));

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#05060F',
        color: 'white',
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top, rgba(0, 40, 245, 0.35), transparent 50%)',
          opacity: 0.8,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 'auto -20% -40% auto',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(91, 231, 255, 0.15), transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left side: Text content and buttons */}
          <Grid item xs={12} md={6}>
            <Chip
              label="Omnichannel CPaaS Platform"
              sx={{
                mb: 3,
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.9)',
                borderRadius: '999px',
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 3, // Margin bottom
              }}
            >
              The world’s most connected cloud communications platform
            </Typography>
            <Typography variant="h6" component="p" sx={{ mb: 4 }}>
              Power your customer communications across all channels, with a
              single platform.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <PrimaryButton>Talk to an expert</PrimaryButton>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderRadius: '999px',
                  px: 4,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                }}
              >
                Explore capabilities
              </Button>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              {heroStats.map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', textTransform: 'capitalize' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right side: Placeholder for the visual/image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://raw.githubusercontent.com/ravireddy07/cpaas-logo/main/illustrations/hero-journeys.svg"
              alt="Visual journey builder illustration"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                filter: 'drop-shadow(0px 40px 80px rgba(0,0,0,0.7))',
              }}
            />
            <Box
              sx={{
                mt: 3,
                borderRadius: 4,
                p: 3,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.6)' }}>
                Live traffic
              </Typography>
              <Stack direction="row" spacing={4} sx={{ mt: 2 }} divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    10B+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                    Messages / yr
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    4.9/5
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                    Customer score
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    &lt;50ms
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                    Global latency
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Enhanced middle showcase */}
        <Box
          sx={{
            mt: { xs: 10, md: 14 },
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(0, 40, 245, 0.18), rgba(5, 6, 15, 0.95))',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.65)',
          }}
        >
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ letterSpacing: 6, color: 'rgba(255,255,255,0.7)' }}>
              Middle of the journey
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Build smarter engagement layers — not just channels.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 640 }}>
              Everything you need to ideate, launch, observe, and optimize conversations at scale. These building blocks replace the bland middle part of most CPaaS landing pages with something memorable.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {featureHighlights.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <FeatureCard>
                  <StatGlow />
                  <Chip
                    label={feature.label}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      alignSelf: 'flex-start',
                      borderRadius: '999px',
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', flexGrow: 1 }}>
                    {feature.description}
                  </Typography>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {feature.stat}
                    </Typography>
                    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1.2, color: 'rgba(255,255,255,0.6)' }}>
                      {feature.statLabel}
                    </Typography>
                  </Box>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.2)' }} />
          <Grid container spacing={3} alignItems="center">
            {workflowSteps.map((step) => (
              <Grid item xs={12} md={4} key={step.title}>
                <Stack spacing={1.5}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {step.description}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#5be7ff' }}>
                    {step.kpi}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    {step.caption}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
