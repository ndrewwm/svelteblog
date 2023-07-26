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

  update_geom_defaults("point", aes(color = txt_main))
  update_geom_defaults("boxplot", aes(fill = txt_main, color = txt_main, alpha = 0.2))
  update_geom_defaults("density", aes(color = txt_main, fill = txt_main, alpha = 0.1))
  update_geom_defaults("bar", aes(color = bg_main, fill = txt_main, alpha = 0.9))
  update_geom_defaults("smooth", aes(color = "#EFCB68"))

  theme_minimal(base_size = 18) +
    theme(
      plot.background = element_rect(fill = "transparent"),
      panel.border = element_blank(),
      panel.background = element_rect(fill = bg_panel, color = NA),
      panel.grid = element_line(color = bg_main),
      axis.text = element_text(color = txt_main),
      axis.title = element_text(color = txt_main),
      plot.title = element_text(color = txt_main, face = "bold"),
      plot.title.position = "plot",
      plot.subtitle = element_text(color = txt_main),
      legend.title = element_text(color = txt_main),
      legend.text = element_text(color = txt_main)
    )
}
