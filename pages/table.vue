<template>
  <div>
    <v-data-table :items="items" :page="page" :items-per-page="5" class="my-table">
      <template #[`header.size`]="{ column }">
        {{ column.title.toUpperCase() }}
      </template>
    </v-data-table>
  </div>
</template>
<script setup>
const items = [
  {
    id: 1,
    name: 'T-Shirt',
    size: 'M',
    color: 'Red',
    price: 19.99,
    quantity: 10
  },
  {
    id: 2,
    name: 'Jeans',
    size: '32',
    color: 'Blue',
    price: 49.99,
    quantity: 5
  },
  {
    id: 3,
    name: 'Sweater',
    size: 'L',
    color: 'Green',
    price: 29.99,
    quantity: 7
  },
  {
    id: 4,
    name: 'Jacket',
    size: 'XL',
    color: 'Black',
    price: 89.99,
    quantity: 3
  },
  {
    id: 5,
    name: 'Socks',
    size: 'One Size',
    color: 'White',
    price: 9.99,
    quantity: 20
  }
]
</script>
<style lang="scss"></style>
