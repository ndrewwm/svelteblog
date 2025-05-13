# Testing a custom theme for the blog/site

library(tidyverse)
library(palmerpenguins)

# sysfonts::font_add_google("Roboto", "Roboto")
# sysfonts::font_add_google("Roboto Mono", "Roboto Mono")
# showtext::showtext_auto()

theme_ndrewwm <- function() {
  bg_main <- "#000411"
  bg_panel <- "#160C28"
  txt_main <- "#E1EFE6"

  update_geom_defaults("hline", aes(color = txt_main))
  update_geom_defaults("vline", aes(color = txt_main))
  update_geom_defaults("line", aes(color = txt_main))
  update_geom_defaults("point", aes(color = txt_main))
  update_geom_defaults("pointrange", aes(color = txt_main))
  update_geom_defaults("boxplot", aes(fill = txt_main, color = txt_main, alpha = 0.2))
  update_geom_defaults("density", aes(color = txt_main, fill = txt_main, alpha = 0.1))
  update_geom_defaults("bar", aes(color = bg_main, fill = txt_main, alpha = 0.9))
  update_geom_defaults("col", aes(color = bg_main, fill = txt_main, alpha = 0.9))
  update_geom_defaults("smooth", aes(color = "#EFCB68"))
  update_geom_defaults("text", aes(color = txt_main))
  update_geom_defaults("segment", aes(color = txt_main))

  theme_minimal(base_size = 15) +
    theme(
      plot.background = element_rect(fill = bg_main),
      panel.border = element_blank(),
      panel.background = element_rect(fill = bg_panel, color = NA),
      panel.grid = element_line(color = bg_main),
      strip.text = element_text(color = txt_main),
      axis.text = element_text(color = txt_main),
      axis.title = element_text(color = txt_main),
      plot.title = element_text(color = txt_main, face = "bold"),
      plot.title.position = "plot",
      plot.subtitle = element_text(color = txt_main),
      plot.caption = element_text(color = txt_main, size = 8),
      legend.title = element_text(color = txt_main),
      legend.text = element_text(color = txt_main)
    )
}
