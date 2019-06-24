Body copy (e.g. garden variety paragraph text) is the heart and soul of all web content, and should always be the first thing you style when designing a website. Aside from selecting a legible font, there are three key typographical factors to good body copy:

- Font Size
- Line Height
- Line Length

In Walter, all elements are sized based on a `0.5rem` grid. (A `rem` in CSS equals 16 pixels in nearly all browsers and all devices - therefore it can also be thought of as an 8 pixel grid). Because text only exists within "lines", it is the `line-height` of text which must be a multiple of 0.5 `rem`, not the font size. That said, the default size for body copy in Walter is `1rem`. This is almost always the default size used by a web browser when no other styles are applied.

Line height is the combined height of text and vertical space which makes up each line of text. For legibility, this should always be between 120% and 150% of the height of the text.

Factoring in the `0.5rem` grid and established guidelines for legible line heights, Walter provides three types of body copy, with the following combinations of font size and line height:

| Size    | Font-Size | Line-Height |
|---------|-----------|-------------|
| Default | 1rem      | 1.5rem      |
| Small   | 0.75rem   | 1rem        |
| Large   | 1.5rem    | 2rem        |

The final factor in body copy legibility is line length. If lines of text are too long, it is hard for the eye to quickly move to the beginning of the next line. Lines should be between 40 and 90 characters long. CSS doesn't allow you to explicitly define character-count based line lengths, so Walter applies a `max-width` of `40rem` to body copy, which equals approximately 90 characters of Default sized copy. This will leave empty whitespace to the right of large containers. This is normal and expected, and preferable to excessively long lines of text.
