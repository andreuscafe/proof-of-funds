import { StaticImageData } from 'next/image';

export type ExchangesType = Array<{
    name: string;
    iconPath: StaticImageData;
    url: string;
    docs: {
        text: string;
        url?: string;
    };
    last_update?: string;
    notes?: {
        text: string;
        url?: string;
    };
}>;

export type HomeProps = {
    exchanges: ExchangesType;
};