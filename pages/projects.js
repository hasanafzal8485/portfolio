import React from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
// import { Button, SimpleGrid } from '@chakra-ui/react';
// import { FaGithub } from 'react-icons/fa';
import { NextSeo } from 'next-seo';
import LineHeading from '@/components/LineHeading';
// import RepoCard from '@/components/RepoCard';
import PinnedProjects from '@/components/PinnedProjects';
import { pinnedRepos } from '@/data/pinnedRepos';

function Projects({ repos = [] }) {
    return (
        <>
            <NextSeo title='Projects' />
            <Box width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'>
                <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
                    <LineHeading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
                        Best projects
                    </LineHeading>
                    <Text mt={3}>A quick collection of my recent projects. Worked on more tha 20 projects. </Text>
                    <VStack direction='column' my={16} width='full' height='full' maxWidth='5xl' spacing={10}>
                        {pinnedRepos.map((data, index) => (
                            <PinnedProjects
                                key={index.toString()}
                                repo={repos?.find((x) => x.name.toLowerCase() === data.id.toLowerCase())}
                                left={index % 2 === 0}
                                projectData={data}
                            />
                        ))}
                    </VStack>
                    {/* <LineHeading fontSize={{ base: `5xl`, lg: `5xl` }} textAlign='center'>
                        Repositories
                    </LineHeading>
                    <Text mt={3}>A list of all of the public repositories on my GitHub.</Text>
                    <Button
                        as='a'
                        target={'_blank'}
                        href='https://github.com/hasanafzal8485'
                        variant='ghost'
                        colorScheme='brand'
                        size='lg'
                        mt={5}
                        leftIcon={<FaGithub />}
                    >
                        View My Profile
                    </Button> */}
                </Flex>
                {/* <SimpleGrid
                    mt={10}
                    columns={{ base: 1, md: 2 }}
                    width='full'
                    height='full'
                    maxH='full'
                    mx='auto'
                    gridAutoRows='1fr'
                    spacingX={10}
                    spacingY={8}
                    isTruncated
                    overflow='visible'
                >
                    {repos?.sort(
                            (a, b) => new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
                        )
                        .reverse()
                        .map((repo, index) => (
                            <RepoCard key={index.toString()} repo={repo} i={index} />
                        ))}
                </SimpleGrid> */}
            </Box>
        </>
    );
}

// export async function getStaticProps() {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/github`);
//     const { stars, repos, followers } = await response.json();
//     return { props: { stars, repos, followers, revalidate: 600 } };
// }

export default Projects;
