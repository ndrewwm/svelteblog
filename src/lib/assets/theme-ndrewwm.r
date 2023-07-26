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

scale_color_ndrewwm_discrete <- function() {

}

p0 <- penguins |>
  filter(species != "Gentoo") |>
  ggplot(aes(x = flipper_length_mm, y = bill_length_mm, color = species)) +
  geom_point() +
  scale_color_manual(
    values = c("#E1EFE6", "#EFCB68", "#575E62")
  ) +
  theme_ndrewwm() +
  # theme(panel.grid.minor = element_blank()) +
  labs(
    title = "Here's a plot",
    subtitle = "It's pretty neat"
  )

p0
