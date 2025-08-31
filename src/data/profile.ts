import type { ProfileData } from '../types';
import { publications } from './publications';
import { projects } from './projects';
import { personal } from './personal';
import { education } from './education';
import { experience } from './experience';
import { skills } from './skills';
import { certifications } from './certifications';
import { contact } from './contact';

export const profileData: ProfileData = {
  personal,
  education,
  experience,
  publications,
  projects,
  skills,
  certifications,
  contact
};
