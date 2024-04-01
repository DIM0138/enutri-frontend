import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SobreView from '@/views/SobreView.vue'
import CadastroView from '@/views/CadastroView.vue'
import ReceitasView from '@/views/ReceitasView.vue'
import ReceitaCard from '@/components/ReceitaCard.vue'
import DashboardView from '@/views/DashboardView.vue'
import PacientesView from '@/views/PacientesView.vue'
import PacienteCard from '@/components/PacienteCard.vue'
import PlanosAlimentaresView from '@/views/PlanosAlimentaresView.vue'
import PlanoAlimentarCard from '@/components/PlanoAlimentarCard.vue'
import PerfilView from '@/views/PerfilView.vue'

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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: '/dashboard/receitas',
          name: 'receitas',
          component: ReceitasView,
          children: [
            {
              path: '/receitas/:id',
              name: 'receita',
              component: ReceitaCard
            }
          ]
        },
        {
          path: '/dashboard/pacientes',
          name: 'pacientes',
          component: PacientesView,
          children: [
            {
              path: '/pacientes/:id',
              name: 'paciente',
              component: PacienteCard
            }
          ]
        },
        {
          path: '/dashboard/planos-alimentares',
          name: 'planos-alimentares',
          component: PlanosAlimentaresView,
          children: [
            {
              path: '/planos-alimentares/:id',
              name: 'plano-alimentar',
              component: PlanoAlimentarCard
            }
          ]
        },
        {
          path: '/dashboard/perfil',
          name: 'perfil',
          component: PerfilView
        }
      ]
    }
  ]
})

export default router
