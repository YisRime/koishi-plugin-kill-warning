# koishi-plugin-kill-warning

[![npm](https://img.shields.io/npm/v/koishi-plugin-kill-warning?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-kill-warning)

为什么要有警告和错误提示？

## ✨ 插件介绍

禁用命令执行时的警告和错误提示。当你不希望机器人向用户显示命令执行中的警告或错误信息时，这个插件可以帮你解决问题。

## 🚀 功能特点

- 可选择性地禁用命令执行时的警告提示
- 可选择性地禁用命令执行时的错误提示
- 插件卸载时自动恢复原有设置
- 轻量级，对性能几乎没有影响

## 📝 配置项

在插件配置界面，你可以找到以下选项：

- `disableWarning`: 禁用命令警告提示（默认为 `true`）
- `disableError`: 禁用命令错误提示（默认为 `true`）

## 🔍 使用场景

- 在公开环境中使用机器人，不希望用户看到技术性错误信息
- 优化用户交互体验，减少干扰信息
- 在特定命令需要静默失败的场景下使用
- 避免错误提示信息泄露敏感信息

## 📋 注意事项

禁用错误提示可能会导致调试变得困难，建议在开发环境下保持启用状态。
