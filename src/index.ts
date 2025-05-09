import { Context, Schema } from 'koishi'

export const name = 'kill-warning'

export const usage = `
<div style="border-radius: 10px; border: 1px solid #ddd; padding: 16px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
  <h2 style="margin-top: 0; color: #4a6ee0;">📌 插件说明</h2>
  <p>📖 <strong>使用文档</strong>：请点击左上角的 <strong>插件主页</strong> 查看插件使用文档</p>
  <p>🔍 <strong>更多插件</strong>：可访问 <a href="https://github.com/YisRime" style="color:#4a6ee0;text-decoration:none;">苡淞的 GitHub</a> 查看本人的所有插件</p>
</div>

<div style="border-radius: 10px; border: 1px solid #ddd; padding: 16px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
  <h2 style="margin-top: 0; color: #e0574a;">❤️ 支持与反馈</h2>
  <p>🌟 喜欢这个插件？请在 <a href="https://github.com/YisRime" style="color:#e0574a;text-decoration:none;">GitHub</a> 上给我一个 Star！</p>
  <p>🐛 遇到问题？请通过 <strong>Issues</strong> 提交反馈，或加入 QQ 群 <a href="https://qm.qq.com/q/PdLMx9Jowq" style="color:#e0574a;text-decoration:none;"><strong>855571375</strong></a> 进行交流</p>
</div>
`

export interface Config {
  disableWarning: boolean
  disableError: boolean
}

export const Config: Schema<Config> = Schema.object({
  disableWarning: Schema.boolean().description('禁用命令警告提示').default(true),
  disableError: Schema.boolean().description('禁用命令错误提示').default(true)
})

export function apply(ctx: Context, config: Config) {
  const applySettings = (cmd) => {
    if (config.disableWarning) cmd.config.showWarning = false
    if (config.disableError) cmd.config.handleError = false
  }
  ctx.$commander._commandList.forEach(applySettings)
  ctx.on('command-added', applySettings)
  ctx.on('dispose', () => {
    ctx.$commander._commandList.forEach(cmd => {
      if (config.disableWarning) cmd.config.showWarning = true
      if (config.disableError) cmd.config.handleError = true
    })
  })
}