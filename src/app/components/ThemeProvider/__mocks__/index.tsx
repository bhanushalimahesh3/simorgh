import React from 'react';

import afaanoromoo from '../themes/afaanoromoo';
import afrique from '../themes/afrique';
import amharic from '../themes/amharic';
import arabic from '../themes/arabic';
import archive from '../themes/archive';
import azeri from '../themes/azeri';
import bengali from '../themes/bengali';
import burmese from '../themes/burmese';
import cymrufyw from '../themes/cymrufyw';
import gahuza from '../themes/gahuza';
import gujarati from '../themes/gujarati';
import hausa from '../themes/hausa';
import hindi from '../themes/hindi';
import igbo from '../themes/igbo';
import indonesia from '../themes/indonesia';
import japanese from '../themes/japanese';
import korean from '../themes/korean';
import kyrgyz from '../themes/kyrgyz';
import marathi from '../themes/marathi';
import mundo from '../themes/mundo';
import naidheachdan from '../themes/naidheachdan';
import nepali from '../themes/nepali';
import news from '../themes/news';
import newsround from '../themes/newsround';
import pashto from '../themes/pashto';
import persian from '../themes/persian';
import pidgin from '../themes/pidgin';
import portuguese from '../themes/portuguese';
import punjabi from '../themes/punjabi';
import russian from '../themes/russian';
import scotland from '../themes/scotland';
import serbian from '../themes/serbian';
import sinhala from '../themes/sinhala';
import somali from '../themes/somali';
import sport from '../themes/sport';
import swahili from '../themes/swahili';
import tamil from '../themes/tamil';
import telugu from '../themes/telugu';
import thai from '../themes/thai';
import tigrinya from '../themes/tigrinya';
import turkce from '../themes/turkce';
import ukchina from '../themes/ukchina';
import ukrainian from '../themes/ukrainian';
import urdu from '../themes/urdu';
import uzbek from '../themes/uzbek';
import vietnamese from '../themes/vietnamese';
import yoruba from '../themes/yoruba';
import zhongwen from '../themes/zhongwen';

import { Services } from '../../../models/types/global';

const themeProviders: { [index: string]: any } = {
  afaanoromoo,
  afrique,
  amharic,
  arabic,
  archive,
  azeri,
  bengali,
  burmese,
  cymrufyw,
  gahuza,
  gujarati,
  hausa,
  hindi,
  igbo,
  indonesia,
  japanese,
  korean,
  kyrgyz,
  marathi,
  mundo,
  naidheachdan,
  nepali,
  news,
  newsround,
  pashto,
  persian,
  pidgin,
  portuguese,
  punjabi,
  russian,
  scotland,
  serbian,
  sinhala,
  somali,
  sport,
  swahili,
  tamil,
  telugu,
  thai,
  tigrinya,
  turkce,
  ukchina,
  ukrainian,
  urdu,
  uzbek,
  vietnamese,
  yoruba,
  zhongwen,
};

interface Props {
  children: React.ReactNode;
  service: Services;
}

const ThemeProvider = ({ children, service }: Props) => {
  const ThemeProviderSynchronous = themeProviders[service];

  return <ThemeProviderSynchronous>{children}</ThemeProviderSynchronous>;
};

export default ThemeProvider;
