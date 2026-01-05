// Construction Panel (lazy imports)
const ConstructionDashboard = lazy(
  () => import("@/modules/construction/pages/Dashboard")
);
const Projects = lazy(() => import("@/modules/construction/pages/Projects"));
const Tasks = lazy(() => import("@/modules/construction/pages/Tasks"));
const Materials = lazy(() => import("@/modules/construction/pages/Materials"));
const Reports = lazy(() => import("@/modules/construction/pages/Reports"));
const MaterialsViewPage = lazy(
  () => import("@/modules/construction/pages/MaterialsViewPage")
);
const ProjectViewPage = lazy(
  () => import("@/modules/construction/pages/ProjectViewPage")
);
const DrawingAttachment = lazy(
  () => import("@/modules/construction/pages/DrawingAttachment")
);
