import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SobreView from '@/views/SobreView.vue'
import CadastroView from '@/views/CadastroView.vue'
import ReceitasView from '@/views/ReceitasView.vue'
import DashboardViewNutricionista from '@/views/nutricionista/DashboardViewNutricionista.vue'
import DashboardViewPaciente from '@/views/paciente/DashboardViewPaciente.vue'
import PacientesView from '@/views/PacientesView.vue'
import PacienteCard from '@/components/PacienteCard.vue'
import PlanosAlimentaresView from '@/views/PlanosAlimentaresView.vue'
import PlanoAlimentarCard from '@/components/PlanoAlimentarCard.vue'
import PerfilView from '@/views/PerfilView.vue'
import PlanoAlimentarView from '@/views/paciente/PlanoAlimentarView.vue'
import MetricasView from '@/views/MetricasView.vue'
import RelatoriosView from '@/views/RelatoriosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/nutricionista/:id',
      name: 'nutricionistaDashboard',
      component: DashboardViewNutricionista,
      children: [
        {
          path: 'perfil',
          name: 'nutricionista-perfil',
          component: PerfilView
        },
        {
          path: 'planos-alimentares',
          name: 'planos-alimentares',
          component: PlanosAlimentaresView,
          children: [
            {
              path: ':idPlanoAlimentar',
              name: 'plano-alimentar',
              component: PlanoAlimentarCard
            }
          ]
        },
        {
          path: 'receitas',
          name: 'receitas',
          component: ReceitasView
        },
        {
          path: 'pacientes',
          name: 'pacientes',
          component: PacientesView,
          children: [
            {
              path: ':idPaciente',
              name: 'paciente',
              component: PacienteCard
            }
          ]
        }
      ]
    },
    {
      path: '/paciente/:id',
      name: 'pacienteDashboard',
      component: DashboardViewPaciente,
      children: [
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView
        },
        {
          path: 'plano-alimentar',
          name: 'paciente-plano-alimentar',
          component: PlanoAlimentarView
        },
        {
          path: 'relatorios',
          name: 'paciente-relatorios',
          component: RelatoriosView
        },
        {
          path: 'metricas',
          name: 'metricas',
          component: MetricasView
        }
      ]
    }
  ]
})

export default router
