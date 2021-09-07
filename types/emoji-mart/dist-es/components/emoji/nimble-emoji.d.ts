import React = require('react');

import { EmojiProps, Data } from '../..';

export interface NimbleEmojiProps extends EmojiProps {
    data: Data;
}

declare const NimbleEmoji: React.SFC<NimbleEmojiProps> | ((props: NimbleEmojiProps) => string);

export { NimbleEmoji as default };
