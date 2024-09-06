local lspconfig = require("lspconfig")

lspconfig.tailwindcss.setup({
	on_attach = LSP_DEFAULTS.on_attach,
	capabilities = LSP_DEFAULTS.capabilities,
})
