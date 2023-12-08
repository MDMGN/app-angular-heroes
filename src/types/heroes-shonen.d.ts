export type HeroeShonen = {
    mal_id:     number;
    url:        string;
    images:     Images;
    name:       string;
    name_kanji: string;
    nicknames:  any[];
    favorites:  number;
    about:      string;
}

export type Images = {
    jpg:  Jpg;
    webp: Webp;
}

export type Jpg = {
    image_url: string;
}

export type Webp = {
    image_url:       string;
    small_image_url: string;
}