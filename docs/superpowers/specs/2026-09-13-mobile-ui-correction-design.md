# Mobile UI 第二轮精细校正规格

## 目标

在已提交的 mobile portfolio 首版基础上，修复 phone 端实际渲染与已确认设计不一致的问题。Desktop/laptop（1024px 及以上）的视觉与交互保持不变；tablet（768px 至 1023px）只保留既有的防破版与触控适配。

## 已确认的调整

### Project

- 修复 `Project.scss` 中 phone/tablet 媒体查询错误嵌套在 `prefers-reduced-motion` 内的问题，使普通 phone 设备也启用 mobile feature cards。
- Phone 下每次展示一张完整 project card，使用原生横向滚动和 scroll snap。
- 每张卡默认完整显示项目标题、说明、图片和操作入口；不要求先点击卡片展开。
- 用真实的滚动位置驱动简洁的 `01 / 02` 位置指示，取代静态或不准确的显示。
- 真实图表继续以 contain 方式完整展示，避免裁切。

### Internship

- 保留一屏一张的原生横滑和 scroll snap。
- 移除 `Tools I survived` 标题，仅保留工具/命令 chips 与经历说明。
- 用真实滚动位置驱动细进度条和当前项目编号，替换固定 25% 的伪进度条。
- 不改变 desktop 的 Redux index、三卡显示和左右切换按钮。

### Profile

- Phone secondary identity 改为 `ZHANG Haoxiang · Gavin`，使张浩翔位于 Gavin 前。
- 保留当前 hero lockup、打字动效和 reduced-motion fallback。

### Contact

- 保留 `Perfectly balanced.` 与 `Hi, this is OP.` 的首尾呼应。
- Email、GitHub、LinkedIn 继续是同级 metadata links。
- 缩小 links 区域的左右留白，提升横向利用率，同时保留不小于 44px 的触控行高度。
- 将 footer 顶部到 sign-off 的间距收紧至与页面其他 section divider 一致的节奏，目标为约 2.75rem。

## 实现边界

- 只修改 `Background`、`Internship`、`Project`、`Footer` 及直接相关 SCSS。
- 不新增路由，不更改 section IDs，不修改静态资源。
- 滚动状态保留在各自 phone carousel 组件的局部 React state；不写入 Redux/localStorage。
- `prefers-reduced-motion` 只禁用动画和平滑滚动，不影响 phone 布局规则。

## 验收

- 375px phone：四个 section 内容完整可读，无横向页面溢出，两个 carousel 的指示与当前卡片一致。
- 768px tablet：不出现 phone layout 意外失效或卡片裁切。
- 1024px desktop：现有视觉、导航与卡片交互不变。
- `npm run lint`、`npm run build` 和 `git diff --check` 通过。
