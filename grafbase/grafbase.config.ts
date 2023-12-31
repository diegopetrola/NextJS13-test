import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 50 }),
  email: g.string().length({ max: 100 }).unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model("Project", {
  title: g.string().length({ max: 50 }),
  github: g.url(),
  image: g.url(),
  liveSiteUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
