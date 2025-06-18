'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/componentss';
import MaskText from '@/componentss/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { ChevronLeft , ChevronRight} from 'lucide-react';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Pill>
        <ChevronLeft className="opacity-80" />
          <span className="">Stage-Link</span>
          <ChevronRight />
        </Pill>

        <div className="inline-flex items-center gap-2 px-4 my-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            {/* <Star className="h-4 w-4" /> */}
            Plus de 1000 stages disponibles
          </div>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag="h1" />
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
