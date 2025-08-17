<script setup lang="ts">
// import type { DuplicateItem } from "~/types";

const inputRef = ref(null);

// const {
//     input: input,
//     appendInput: appendText,
//     setInput: setInput,
// } = useInput();
//
const input = ref("");

// const { selectedSeparators } = useSeparators();

// const inputInfo = computed(() =>
//     parseText(inputA.value, selectedSeparators.value),
// );

// const comparedResult = computed(() =>
//     compareLists(listAInfo.value.rawItems, listBInfo.value.rawItems),
// );

// const toast = useToast();
// const { writeText } = useClipboard();

// import type { CopyStatus } from "~/types";

// const validListACopyStatus: Ref<CopyStatus> = ref("idle");

// const handleCopy = async (target: "A" | "B") => {
//     const text =
//         target === "A"
//             ? listAInfo.value.validItems.join("\n")
//             : listBInfo.value.validItems.join("\n");
//     const result = await writeText(text);

//     if (result.success) {
//         if (target === "A") validListACopyStatus.value = "success";
//         else validListBCopyStatus.value = "success";

//         setTimeout(() => {
//             if (target === "A") validListACopyStatus.value = "idle";
//             else validListBCopyStatus.value = "idle";
//         }, 1500);
//     } else {
//         if (target === "A") validListACopyStatus.value = "fail";
//         else validListBCopyStatus.value = "fail";

//         setTimeout(() => {
//             if (target === "A") validListACopyStatus.value = "idle";
//             else validListBCopyStatus.value = "idle";
//         }, 1500);
//     }
// };

// import { removeDuplicateItems, removeInvalidItems } from "@/utils/parse";

// const handleRemoveDuplicateItems = (target: "A" | "B") => {
//     const text = target === "A" ? inputA.value : inputB.value;
//     const result = removeDuplicateItems(text, selectedSeparators.value);

//     if (text === result) {
//         toast.add({
//             title: `名单 ${target} 中没有重复项`,
//             icon: "i-lucide-circle-alert",
//             color: "warning",
//         });
//     } else {
//         toast.add({
//             title: `名单 ${target} 的重复项已移除`,
//             icon: "i-lucide-check",
//         });
//     }

//     if (target === "A") setInputA(result);
//     else setInputB(result);
// };

// const handleRemoveInvalidItems = (target: "A" | "B") => {
//     const text = target === "A" ? inputA.value : inputB.value;
//     const result = removeInvalidItems(text, selectedSeparators.value);

//     if (text === result) {
//         toast.add({
//             title: `名单 ${target} 中没有无效项`,
//             icon: "i-lucide-circle-alert",
//             color: "neutral",
//         });
//     } else {
//         toast.add({
//             title: `名单 ${target} 的无效项已移除`,
//             icon: "i-lucide-check",
//         });
//     }

//     if (target === "A") setInputA(result);
//     else setInputB(result);
// };
</script>

<template>
    <UContainer class="py-8 max-w-3xl">
        <AppHeader />

        <IDInput
            ref="inputRef"
            v-model="input"
            title="身份证输入区"
            :total-count="100"
            class="mb-4"
        >
            <!-- <template #stats>
                <StatPopover
                    title="个有效项"
                    :count="listAInfo.validItemsCount"
                    :items="listAInfo.validItems"
                    status="green"
                    :show-copy="true"
                    @copy="handleCopy('A')"
                    :copyStatus="validListACopyStatus"
                />

                <StatPopover
                    title="个重复项"
                    :count="listAInfo.duplicateItemsCount"
                    :items="listAInfo.duplicateItems"
                    status="yellow"
                    :show-clean="true"
                    :display-formatter="
                        (item: DuplicateItem) =>
                            `[${item.count} 次]${item.label}`
                    "
                    @clean="handleRemoveDuplicateItems('A')"
                />

                <StatPopover
                    title="个可能无效项"
                    :count="listAInfo.invalidItemsCount"
                    :items="listAInfo.invalidItems"
                    status="red"
                    :show-clean="true"
                    @clean="handleRemoveInvalidItems('A')"
                />
            </template> -->
        </IDInput>

        <IDTable />
    </UContainer>
</template>
