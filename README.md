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

---

## react-select

This package used to customize select dropdown's.

**Usage**

```javascript
import Select from "react-select";

<Select
  placeholder=""
  value={}
  onChange={(value) => setValue(value.value)}
  options={options}
/>;
```

**[Github page](https://github.com/JedWatson/react-select)**

---

---

## react-multi-date-picker

This package used to pick date and time in reservation page.

**Usage**

```javascript
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

<DatePicker
  placeholder=""
  format="MM/DD/YYYY HH:mm"
  plugins={[<TimePicker position="bottom" />]}
  calendar={persian}
  locale={persian_fa}
  calendarPosition="bottom-right"
  onChange={(value) => setValue(value)}
/>;
```

**[Github page](https://github.com/shahabyazdi/react-multi-date-picker)**

---

# Custom Hooks

## useGlobalContext

This custom hook is used to access the global context and destructure from it easily.

**Usage**

```javascript
import useGlobalContext from "context";

const { var1, var2 } = useGlobalContext();
```

---

## useWindowDimensions

This hook is used to messure the width and height of the document and return it.
this hook is used in the application to trigger a callback function if the width/height of document changed.

**Usage**

```javascript
import useWindowDimensions from "./hooks/useWindowDimensions";

const { width, height } = useWindowDimensions();
useEffect(() => {
  if (width > 992 || height < 580) {
    callBack();
  }
}, [width, height]);
```
