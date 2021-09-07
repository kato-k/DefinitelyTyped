import React = require('react');

import { EmojiProps } from '../..';

declare const Emoji: React.StatelessComponent<EmojiProps> | ((props: EmojiProps) => string);

export { Emoji as default };
