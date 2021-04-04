initSidebarItems({"derive":[["Pixel",""],["WithAlpha",""]],"fn":[["contrast_ratio","Calculate the ratio between two `luma` values."]],"mod":[["blend","Color blending and blending equations."],["chromatic_adaptation","Convert colors from one reference white point to another"],["convert","Traits for converting between color spaces."],["encoding","Various encoding traits, types and standards."],["float","Floating point trait"],["gradient","Types for interpolation between multiple colors."],["luma","Luminance types."],["named","A collection of named color constants. Can be toggled with the `\"named\"` and `\"named_from_str\"` Cargo features."],["rgb","RGB types, spaces and standards."],["white_point","Defines the tristimulus values of the CIE Illuminants."]],"struct":[["Alpha","An alpha component wrapper for colors."],["Hsl","HSL color space."],["Hsv","HSV color space."],["Hwb","HWB color space."],["Lab","The CIE L*a*b* (CIELAB) color space."],["LabHue","A hue type for the CIE L*a*b* family of color spaces."],["Lch","CIE L*C*h°, a polar version of CIE L*a*b*."],["Packed","RGBA color packed into a 32-bit unsigned integer. Defaults to ARGB ordering for `Rgb` types and RGBA ordering for `Rgba` types."],["RgbHue","A hue type for the RGB family of color spaces."],["Xyz","The CIE 1931 XYZ color space."],["Yxy","The CIE 1931 Yxy (xyY)  color space."]],"trait":[["Blend","A trait for colors that can be blended together."],["Clamp","A trait for clamping and checking if colors are within their ranges."],["ColorDifference","A trait for calculating the color difference between two colors."],["Component","Common trait for color components."],["ComponentWise","Perform a unary or binary operation on each component of a color."],["FloatComponent","Common trait for floating point color components."],["FromComponent","Converts from a color component type, while performing the appropriate scaling, rounding and clamping."],["FromF64","A trait for infallible conversion from `f64`. The conversion may be lossy."],["GetHue","A trait for colors where a hue may be calculated."],["Hue","A trait for colors where the hue can be manipulated without conversion."],["IntoComponent","Converts into a color component type, while performing the appropriate scaling, rounding and clamping."],["Mix","A trait for linear color interpolation."],["RelativeContrast","A trait for calculating relative contrast between two colors."],["RgbChannels","Splits and combines RGB(A) types with some channel ordering. Channels may be ordered as `Abgr`, `Argb`, `Bgra`, or `Rgba`."],["Saturate","A trait for colors where the saturation (or chroma) can be manipulated without conversion."],["Shade","The `Shade` trait allows a color to be lightened or darkened."],["WithAlpha","A trait for color types that can have or be given transparency (alpha channel)."]],"type":[["Hsla","Linear HSL with an alpha component. See the `Hsla` implementation in `Alpha`."],["Hsva","Linear HSV with an alpha component. See the `Hsva` implementation in `Alpha`."],["Hwba","Linear HWB with an alpha component. See the `Hwba` implementation in `Alpha`."],["Laba","CIE L*a*b* (CIELAB) with an alpha component. See the `Laba` implementation in `Alpha`."],["Lcha","CIE L*C*h° with an alpha component. See the `Lcha` implementation in `Alpha`."],["Mat3","A 9 element array representing a 3x3 matrix."],["Xyza","CIE 1931 XYZ with an alpha component. See the `Xyza` implementation in `Alpha`."],["Yxya","CIE 1931 Yxy (xyY) with an alpha component. See the `Yxya` implementation in `Alpha`."]]});