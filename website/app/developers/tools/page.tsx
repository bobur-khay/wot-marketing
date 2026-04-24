'use client';

import { Page } from '@/app/_components/Page';
import { useMemo, useState } from 'react';
import { ToolFilters } from './_components/ToolFilters';
import toolsJSON from '@/lib/generated/devToolsOutput.json';
import { DevToolsOutput, ToolOutput } from '../../../../scripts/dev-tools/types';
import { Alert, Modal, ModalClose, ModalDialog, Stack, Table, Typography } from '@mui/joy';

export default function ToolsPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [platformFilter, setPlatformFilter] = useState('All');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [showObsoleteFilter, setShowObsoleteFilter] = useState('Hide');
  const [selectedTool, setSelectedTool] = useState<ToolOutput | null>(null);
  const OBSOLETE_IN = 2;

  const tools = toolsJSON as DevToolsOutput;

  const isToolObsolete = (lastUpdated: string | null) => {
    if (!lastUpdated) {
      return false;
    }
    const input = new Date(lastUpdated);
    const now = new Date();
    const obsoleteDate = new Date(input);
    obsoleteDate.setFullYear(obsoleteDate.getFullYear() + OBSOLETE_IN);
    return now >= obsoleteDate;
  };

  const filteredTools = useMemo(() => {
    return Object.keys(tools).reduce((acc, category) => {
      if (categoryFilter !== 'All' && category !== categoryFilter) {
        return acc;
      }
      const subCategories = tools[category];
      Object.keys(subCategories).forEach((subCategory) => {
        const tools = subCategories[subCategory].tools;
        const filteredTools = tools
          .filter((tool) => platformFilter === 'All' || tool.platforms.includes(platformFilter))
          .filter((tool) => languageFilter === 'All' || tool.languages.includes(languageFilter))
          .filter((tool) => showObsoleteFilter === 'Show' || !isToolObsolete(tool.lastUpdated));
        if (filteredTools.length > 0) {
          console.log(subCategories[subCategory]);
          if (!acc[category]) {
            acc[category] = {};
          }
          acc[category][subCategory] = {
            ...subCategories[subCategory],
            tools: filteredTools,
          };
        }
      });
      return acc;
    }, {} as DevToolsOutput);
  }, [categoryFilter, languageFilter, platformFilter, showObsoleteFilter, tools]);

  return (
    <Page
      title="WoT Tools"
      subtitle="Various resources for building Web of Things applications, including libraries, ready-to-use software, services, and SDKs tailored for different development stages, are grouped below "
    >
      {selectedTool && (
        <Modal open={true} onClose={() => {}}>
          <ModalDialog>
            <ModalClose />
            <Typography>{selectedTool.name}</Typography>
            <Typography>{selectedTool.description}</Typography>
            <Typography>{selectedTool.license}</Typography>
            <Typography>{selectedTool.platforms}</Typography>
            <Typography>{selectedTool.lastUpdated}</Typography>
            <Typography>{selectedTool.repoUrl}</Typography>
            <Typography>{selectedTool.affiliation}</Typography>
            <Typography>{selectedTool.homepageUrl}</Typography>
          </ModalDialog>
        </Modal>
      )}
      <Stack gap={3}>
        <ToolFilters
          category={categoryFilter}
          platform={platformFilter}
          language={languageFilter}
          showObsolete={showObsoleteFilter}
          setCategory={setCategoryFilter}
          setPlatform={setPlatformFilter}
          setLanguage={setLanguageFilter}
          setShowObsolete={setShowObsoleteFilter}
        />
        <Alert variant="outlined" sx={{ width: 'fit-content', gap: 0.5 }}>
          Showing
          <Typography color="primary" fontWeight="bold">
            {Object.values(filteredTools).reduce((acc, category) => {
              return acc + Object.values(category).reduce((acc, subCategory) => acc + subCategory.tools.length, 0);
            }, 0)}
          </Typography>
          matching tools
        </Alert>
      </Stack>
      {Object.keys(filteredTools).map((category) => (
        <Stack key={category} gap={2}>
          <Typography level="h3">{category}</Typography>
          <Stack gap={4}>
            {Object.keys(filteredTools[category]).map((subCategory) => (
              <Stack key={subCategory} gap={2}>
                <Stack>
                  <Typography level="title-lg">{subCategory}</Typography>
                  <Typography>{filteredTools[category][subCategory].description}</Typography>
                </Stack>
                <Table
                  borderAxis="bothBetween"
                  variant="outlined"
                  sx={{
                    borderRadius: 'sm',
                    '& tr:hover': {
                      backgroundColor: '#f2f2f2',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <tbody>
                    {filteredTools[category][subCategory].tools.map((tool) => (
                      <tr key={tool.name}>
                        <td>
                          <Typography fontWeight="lg" pl={1}>
                            {tool.name}
                          </Typography>
                        </td>
                        <td>{tool.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
    </Page>
  );
}
