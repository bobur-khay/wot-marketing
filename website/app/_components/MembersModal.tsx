'use client';

import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import memberOrganizationsJSON from '@/lib/generated/memberOrganizationsOutput.json';
import { Result } from '../../../scripts/member-organizations/types';
import { Box } from '@mui/joy';
import { LinkButton } from './LinkButton';

export function MembersModalButton() {
  const [open, setOpen] = useState(false);
  const memberOrganizations: Result = memberOrganizationsJSON;
  const subgroups = Object.values(memberOrganizations);
  const total = subgroups.reduce((acc, subgroup) => {
    return acc + subgroup.length;
  }, 0);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        <Stack>
          <Typography level="h2" color="primary">
            {total}
          </Typography>
          <Typography>Organizations</Typography>
        </Stack>
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog size="lg" sx={{ width: '80%', maxWidth: '1500px', pb: 0 }}>
          <ModalClose />
          <DialogTitle component="h3" style={{ fontSize: '26px' }}>
            Member Organizations
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            {Object.entries(memberOrganizations).map(([group, members]) => (
              <Stack key={group} mb={4}>
                <Typography level="title-lg" mb={2}>{`${group} (${members.length})`}</Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gridAutoRows: '1fr',
                    gap: 2,
                  }}
                >
                  {members.map((member, index) => (
                    <LinkButton key={member.title + index} href={member.homepage}>
                      {member.title}
                    </LinkButton>
                  ))}
                </Box>
              </Stack>
            ))}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}
