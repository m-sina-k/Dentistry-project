# Packages

## react-onClickOutside

This package is used to trigger a callback function when user click's outside of a component.

**Usage**

```javascript
import OnClickOutside from "react-onclickoutside";

Component.handleClickOutside = () => callBack();

const clickOutsideConfig = {
  handleClickOutside: () => Component.handleClickOutside,
};

export default OnClickOutside(Component, clickOutsideConfig);
```

**[Github page](https://github.com/Pomax/react-onclickoutside)**

---

## react-reveal

This package used to add animation's while component is rendering.

**Usage**

```javascript
import AnimationName from "react-reveal/AnimationName";

<AnimationName duration={1000} delay={1000} prop>
  <Component />
</AnimationName>;
```

**[Github page](https://github.com/rnosov/react-reveal)**

---

## swiper

This package used to create silders.

**Usage**

```javascript
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

<Swiper
  slidesPerView={x}
  spaceBetween={x}
  modules={[Navigation]}
  navigation
  loop
  className=""
  breakpoints={{}}
>
  <SwiperSlide>
    <Component />
  </SwiperSlide>
</Swiper>;
```

**[Github page](https://github.com/nolimits4web/swiper)**

---

# Custom Hooks

## useGlobalContext

This custom hook is used to access the global context and destructure from it easily.

**Usage**

```javascript
import useGlobalContext from 'context';

const {var1,var2} = useGlobalContext();
```

---

## useWindowDimensions

This hook is used to messure the width and height of the document and return it.
this hook is used in the application to trigger a callback function if the width/height of document changed.

**Usage**

```javascript
import useWindowDimensions from "./hooks/useWindowDimensions";

const { width,height } = useWindowDimensions();
  useEffect(() => {
    if (width > 992 || height < 580) {
      callBack();
    }
  }, [width,height]);
```