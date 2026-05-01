import HeroSection from '../sections/HeroSection';
import SolutionsGrid from '../sections/SolutionsGrid';
import AboutFounder from '../sections/AboutFounder';
import CustomerStories from '../sections/CustomerStories';
import CtaQuiz from '../sections/CtaQuiz';
import InstitutionalReach from '../sections/InstitutionalReach';

export const COMPONENT_REGISTRY: Record<string, any> = {
  'hero-standard': HeroSection,
  'solutions-grid': SolutionsGrid,
  'about-founder': AboutFounder,
  'customer-stories': CustomerStories,
  'cta-quiz': CtaQuiz,
  'institutional-reach': InstitutionalReach
};
