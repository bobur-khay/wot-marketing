import { Box } from '@mui/joy';
import { Filter } from './Filter';
import toolsJSON from '@/lib/generated/devToolsOutput.json';
import { DevToolsOutput, ToolOutput } from '../../../../../scripts/dev-tools/types';
import { useMemo } from 'react';

export function ToolFilters({
  category,
  setCategory,
  platform,
  setPlatform,
  language,
  setLanguage,
  showObsolete,
  setShowObsolete,
}: {
  category: string;
  setCategory: (category: string) => void;
  platform: string;
  setPlatform: (platform: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  showObsolete: string;
  setShowObsolete: (showObsolete: string) => void;
}) {
  const tools = toolsJSON as DevToolsOutput;
  const allCategories = Object.keys(tools);

  const { allPlatformsSet, allLanguagesSet } = useMemo(
    () =>
      allCategories.reduce(
        ({ allPlatformsSet, allLanguagesSet }, category) => {
          Object.keys(tools[category]).forEach((subCategory: string) => {
            tools[category][subCategory].tools.forEach((tool: ToolOutput) => {
              tool.platforms.forEach((platform: string) => {
                allPlatformsSet.add(platform);
              });
              tool.languages.forEach((language: string) => {
                allLanguagesSet.add(language);
              });
            });
          });
          return { allPlatformsSet, allLanguagesSet };
        },
        { allPlatformsSet: new Set<string>(), allLanguagesSet: new Set<string>() }
      ),
    [allCategories, tools]
  );

  const allCategoriesOptions = ['All', ...allCategories];
  const allPlatformsOptions = ['All', ...Array.from(allPlatformsSet)];
  const allLanguagesOptions = ['All', ...Array.from(allLanguagesSet)];
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(min-content, max-content))',
        gap: 1.4,
        alignItems: 'center',
      }}
    >
      <Filter
        label="Category"
        options={allCategoriesOptions}
        selectedOption={category}
        onClick={(option) => setCategory(option)}
      />
      <Filter
        label="Platform"
        options={allPlatformsOptions}
        selectedOption={platform}
        onClick={(option) => setPlatform(option)}
      />
      <Filter
        label="Language"
        options={allLanguagesOptions}
        selectedOption={language}
        onClick={(option) => setLanguage(option)}
      />
      <Filter
        label="Obsolete"
        options={['Show', 'Hide']}
        selectedOption={showObsolete}
        onClick={(option) => setShowObsolete(option)}
      />
    </Box>
  );
}
