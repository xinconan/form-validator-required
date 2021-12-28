# form-validator-required
一个适用于 [zent](https://github.com/youzan/zent) 的加强版表单校验库。

未来会计划支持 `Element-UI` 。

## 支持的校验方法
**requiredStrict**  
必填校验，除了校验空字符串外，还会将校验空格（半角和全角），适用于在判空时要将空格算做空字符串的场景中。

## Usage
```js
import { Validators } from 'zent';
import FormValidator from 'form-validator-required/es/zent';

FormValidator.init(Validators);

<FormInputField 
  name="姓名"
  required
  validators={[FormValidator.requiredStrict('姓名不能为空')]}
/>
```
