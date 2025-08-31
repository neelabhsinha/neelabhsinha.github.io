import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  IconButton,
  useTheme,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  Description,
  Code,
  VideoLibrary,
  Launch,
  School,
  Close,
  Info,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Publication, PublicationLink } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface PublicationsProps {
  publications: Publication[];
}

const PublicationsSection: React.FC<PublicationsProps> = ({ publications }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [showAllPublications, setShowAllPublications] = useState(false);

  const getLinkIcon = (type: PublicationLink['type']) => {
    switch (type) {
      case 'pdf':
        return <Description />;
      case 'code':
        return <Code />;
      case 'video':
        return <VideoLibrary />;
      case 'arxiv':
        return <School />;
      default:
        return <Launch />;
    }
  };

  const getLinkLabel = (type: PublicationLink['type']) => {
    switch (type) {
      case 'pdf':
        return 'PDF';
      case 'code':
        return 'Code';
      case 'video':
        return 'Video';
      case 'arxiv':
        return 'arXiv';
      case 'doi':
        return 'DOI';
      default:
        return 'Link';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const formatAuthors = (authors: string[], currentAuthor: string = 'Neelabh Sinha') => {
    return authors.map((author, index) => (
      <span key={index}>
        {author === currentAuthor ? (
          <strong style={{ color: theme.palette.primary.main }}>{author}</strong>
        ) : (
          author
        )}
        {index < authors.length - 1 && ', '}
      </span>
    ));
  };

  // Sort publications by date (newest first)
  const sortedPublications = [...publications].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Show only first 3 publications unless "see more" is clicked
  const displayedPublications = showAllPublications ? sortedPublications : sortedPublications.slice(0, 3);

  return (
    <Box
      id="publications"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.5)' 
          : 'rgba(248, 249, 250, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Publications
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              Research publications in machine learning, computer vision, and AI
            </Typography>
          </motion.div>

                    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            {displayedPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                    },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedPublication(publication)}
                >


                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        lineHeight: 1.3,
                      }}
                    >
                      {publication.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, lineHeight: 1.4 }}
                    >
                      {formatAuthors(publication.authors)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, fontStyle: 'italic', fontWeight: 500 }}
                    >
                      {publication.venueShort || publication.venue} • {formatDate(publication.date)}
                    </Typography>



                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button
                        size="small"
                        startIcon={<Info />}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 500,
                        }}
                      >
                        See Details
                      </Button>
                      
                      <Stack direction="row" spacing={1}>
                        {publication.links.map((link, linkIndex) => (
                          <IconButton
                            key={linkIndex}
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(link.url, '_blank');
                            }}
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              border: `1px solid ${theme.palette.divider}`,
                              color: theme.palette.primary.main,
                              '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                              },
                            }}
                          >
                            {getLinkIcon(link.type)}
                          </IconButton>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Publication Detail Modal */}
          <Dialog
            open={!!selectedPublication}
            onClose={() => setSelectedPublication(null)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3,
                maxHeight: '90vh',
              },
            }}
          >
            {selectedPublication && (
              <>
                <DialogTitle
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    pb: 2,
                  }}
                >
                  <Box sx={{ flex: 1, pr: 2 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, lineHeight: 1.3, mb: 1 }}>
                      {selectedPublication.title}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => setSelectedPublication(null)}
                    sx={{ mt: -1, mr: -1 }}
                  >
                    <Close />
                  </IconButton>
                </DialogTitle>

                <DialogContent>
                  {selectedPublication.image && (
                    <Box sx={{ mb: 3, textAlign: 'center' }}>
                      <img
                        src={selectedPublication.image}
                        alt={selectedPublication.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '200px',
                          objectFit: 'contain',
                          borderRadius: '8px',
                        }}
                      />
                    </Box>
                  )}

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                    <strong>Authors:</strong> {formatAuthors(selectedPublication.authors)}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                    <strong>Published in:</strong> {selectedPublication.venue} ({formatDate(selectedPublication.date)})
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
                    Abstract
                  </Typography>

                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.6, textAlign: 'justify' }}>
                    {selectedPublication.abstract}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: theme.palette.primary.main }}>
                      Keywords
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                      {selectedPublication.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            mb: 1,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main + '20',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: theme.palette.primary.main }}>
                      Links & Resources
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1 }}>
                      {selectedPublication.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outlined"
                          startIcon={getLinkIcon(link.type)}
                          component={Link}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            textTransform: 'none',
                            borderRadius: 2,
                            mb: 1,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                              color: 'white',
                            },
                          }}
                        >
                          {getLinkLabel(link.type)}
                        </Button>
                      ))}
                    </Stack>
                  </Box>
                </DialogContent>

                <DialogActions sx={{ p: 3, pt: 1 }}>
                  <Button onClick={() => setSelectedPublication(null)} variant="outlined">
                    Close
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>

          {/* See More Button */}
          {sortedPublications.length > 3 && (
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                    },
                  }}
                >
                  {showAllPublications ? 'Show Less' : `See ${sortedPublications.length - 3} More Publications`}
                </Button>
              </Box>
            </motion.div>
          )}

          {/* Google Scholar Link */}
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                For more details and citations, visit my
              </Typography>
              <Button
                component="a"
                href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<School />}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                }}
              >
                Google Scholar Profile
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PublicationsSection;
